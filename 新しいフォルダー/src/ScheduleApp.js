
import { useState } from "react";

const schedules = [
  {
    date: "2025-06-06",
    time: "20:00",
    vtuber: "小野鹿かのこ",
    title: "雑談配信🌙",
    url: "https://www.youtube.com/@konokakanoko",
    tag: "雑談"
  },
  {
    date: "2025-06-06",
    time: "21:00",
    vtuber: "山田はるか",
    title: "Apexコラボ🔥",
    url: "https://www.youtube.com/",
    tag: "ゲーム"
  }
];

export default function ScheduleApp() {
  const [filter, setFilter] = useState("");
  const filtered = schedules.filter(s => filter === "" || s.vtuber === filter);
  const uniqueVtubers = [...new Set(schedules.map(s => s.vtuber))];

  return (
    <div className="p-6 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4">🗓 配信スケジュール</h1>

      <div className="mb-4">
        <label className="mr-2">配信者で絞り込み：</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">全員表示</option>
          {uniqueVtubers.map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filtered.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow">
            <div className="text-sm text-gray-500">{item.date} / {item.time}</div>
            <div className="text-lg font-semibold">{item.vtuber}｜{item.title}</div>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">配信リンクへ</a>
          </div>
        ))}
      </div>
    </div>
  );
}
