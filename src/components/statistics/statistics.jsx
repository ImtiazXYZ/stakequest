import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const StatisticsToken = () => {
  const statsData = [
    { label: "Funded Projects", value: "359", icon: "📂" },
    { label: "Unique Participants", value: "742", icon: "🎒" },
    { label: "Raised Capital", value: "17M", icon: "💰" },
    { label: "Initial Market Cap", value: "32M", icon: "🌐" },
  ];

  const pieData = [
    { name: "Team", value: 7.5, color: "#7f8cff" },
    { name: "Staking", value: 9.5, color: "#f4e04d" },
    { name: "Advisors", value: 10.0, color: "#6be2a8" },
    { name: "Liquidity", value: 12.0, color: "#a394f2" },
    { name: "Ecosystem", value: 16.33, color: "#f6897a" },
    { name: "Marketing", value: 16.33, color: "#5e6df2" },
    { name: "Private Sale", value: 30.0, color: "#b0cafb" },
  ];

  return (
    <div className="statistics">
      <style jsx>{`
        .statistics {
          background: linear-gradient(180deg, #0c0f2c 0%, #20204f 100%);
          color: #fff;
          padding: 60px 20px;
          font-family: "Arial", sans-serif;
          min-height: 100vh;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .stats-title {
          font-size: 48px;
          font-weight: bold;
          background: linear-gradient(to right, #fff, #00f5a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stats-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          margin-bottom: 60px;
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 30px 40px;
          min-width: 200px;
          text-align: center;
          transition: 0.3s;
        }

        .stats-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 245, 160, 0.2);
        }

        .stats-icon {
          font-size: 36px;
          margin-bottom: 12px;
        }

        .stats-label {
          font-size: 16px;
          opacity: 0.8;
        }

        .stats-value {
          font-size: 32px;
          font-weight: bold;
          color: #b0ffb0;
          margin-top: 8px;
        }

        .chart-section {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 40px 20px;
          text-align: center;
        }

        .chart-title {
          font-size: 28px;
          margin-bottom: 30px;
        }

        .chart-wrapper {
          width: 100%;
          height: 400px;
        }

        .chart-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        .legend-label {
          font-size: 14px;
          color: #ddd;
        }

        .chart-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.chart-wrapper {
  flex: 1 1 300px;
  min-width: 300px;
  height: 400px;
}

.chart-legend {
  flex: 1 1 200px;
  min-width: 200px;
}

        @media (max-width: 768px) {
          .stats-title {
            font-size: 36px;
          }

          .stats-grid {
            flex-direction: column;
            align-items: center;
          }

          .chart-wrapper {
            height: 300px;
          }
  .chart-row {
    flex-direction: column;
  
}

        }

        @media (max-width: 480px) {
          .stats-title {
            font-size: 28px;
          }

          .chart-wrapper {
            height: 250px;
          }
        }
      `}</style>

      <div className="stats-header">
        <h1 className="stats-title">Statistics Token</h1>
      </div>

      <div className="stats-grid">
        {statsData.map((item, i) => (
          <div key={i} className="stats-card">
            <div className="stats-icon">{item.icon}</div>
            <div className="stats-label">{item.label}</div>
            <div className="stats-value">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="chart-section">
          <h2 className="chart-title">Risebot</h2>
          <div className="chart-row">
            <div className="chart-wrapper">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    dataKey="value"
                    paddingAngle={1}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-legend">
              {pieData.map((item, i) => (
                <div key={i} className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="legend-label">
                    {item.name} - {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  );
};

export default StatisticsToken;
