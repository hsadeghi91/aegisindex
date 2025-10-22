import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'شنبه', score: 65 },
  { name: 'یکشنبه', score: 72 },
  { name: 'دوشنبه', score: 78 },
  { name: 'سه‌شنبه', score: 81 },
  { name: 'چهارشنبه', score: 85 },
  { name: 'پنجشنبه', score: 88 },
  { name: 'جمعه', score: 92 }
];

const PerformanceChart = () => {
  return (
    <div className="glass-card p-4 sm:p-6 rounded-2xl">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">روند پیشرفت هفتگی</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontFamily: 'Vazirmatn', fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontFamily: 'Vazirmatn', fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '12px',
              fontFamily: 'Vazirmatn',
              fontSize: '14px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="hsl(var(--accent))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--accent))', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
