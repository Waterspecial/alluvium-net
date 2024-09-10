export const generatePieData = (stats) => {
  return [
    { name: "Total Projects", value: stats.total_projects },
    { name: "Completed Projects", value: stats.completed_projects },
    { name: "Active Projects", value: stats.active_projects },
  ];
};

export const generateBarData = (stats) => {
  return [
    { name: "Success Rate", value: stats.project_success_rate },
    { name: "Average Duration", value: stats.average_project_duration },
  ];
};
