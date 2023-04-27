export const GA_TRACKING_ID = 'G-FN7S5DQ859';

export const pageview = (url) => {
  window.gtag('config', G-FN7S5DQ859, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
