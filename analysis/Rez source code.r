this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)

library(plyr)
library(dplyr)
library(reshape)
library(ggplot2)
library(gtable)
library(lme4)
library(tidyverse)
library(lmerTest)
library(bootstrap)
library(ggpubr)
library(stringr)

`%notin%` <- Negate(`%in%`)
raw_data_path <- "adjunct_control_norming_data.csv"
data<-read.csv(raw_data_path)

#####################
#Data Pre-processing#
#####################

exclude_wrong_attempt <- data %>%
  dplyr::group_by(workerid) %>%
  dplyr::summarise(
    exclude_wrong = any(wrong_attempts > 1, na.rm = TRUE),
    .groups = "drop"
  ) %>%
  dplyr::filter(exclude_wrong) %>%
  dplyr::pull(workerid)
filler_data <- data %>%
  filter(condition %in% c("grammatical", "ungrammatical"))
filler_summary <- filler_data %>%
  group_by(workerid, condition) %>%
  summarise(
    n = sum(!is.na(response)),
    mean_response = mean(response, na.rm = TRUE),
    sd_response = sd(response, na.rm = TRUE),
    se = sd_response / sqrt(n),
    ci_lower = mean_response - qt(0.975, df = n - 1) * se,
    ci_upper = mean_response + qt(0.975, df = n - 1) * se,
    .groups = "drop"
  )
filler_wide <- filler_summary %>%
  select(workerid, condition, ci_lower, ci_upper) %>%
  tidyr::pivot_wider(
    names_from = condition,
    values_from = c(ci_lower, ci_upper)
  )
exclude_ci_overlap <- filler_wide %>%
  mutate(
    exclude_overlap = !(
      ci_upper_grammatical < ci_lower_ungrammatical |
        ci_upper_ungrammatical < ci_lower_grammatical
    )
  ) %>%
  filter(exclude_overlap) %>%
  pull(workerid)
excluded_workerids <- union(exclude_wrong_attempt, exclude_ci_overlap)
#######################
data_summary <- data %>%
  filter(condition %in% c("human", "nonhuman")) %>%
  group_by(condition, lexicalization) %>%
  summarize(n = sum(!is.na(response)),
            mean_response = mean(response, na.rm = TRUE),
            sd_response = sd(response, na.rm = TRUE),
            se = sd_response / sqrt(n),
            ci_lower = mean_response - qt(0.975, df = n - 1) * se,
            ci_upper = mean_response + qt(0.975, df = n - 1) * se,
            .groups = "drop"
            )
cbPalette = c("#e69d00", "#009e74","#d55e00",  "#cc79a7", "#0071b2")
bar_plot <- ggplot(data_summary, aes(x = condition, y = mean_response, fill = condition)) +
  geom_col(position = position_dodge(width = 0.8), width = 0.7) +
  geom_errorbar(
    aes(ymin = ci_lower, ymax = ci_upper),
    position = position_dodge(width = 0.8),
    width = 0.3,
    linewidth = 1
  ) +
  scale_fill_manual(values = cbPalette, name = NULL) + 
  theme_bw() +
  xlab("Condition") +
  ylab("Mean acceptability rating") +
  theme(legend.position = "bottom") +
  facet_wrap("lexicalization")
bar_plot

