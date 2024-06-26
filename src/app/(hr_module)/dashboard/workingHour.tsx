import { Card, Calendar } from '@nextui-org/react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useState } from 'react';
import { WorkingHourItems } from '@/app/type/interface';
import Popup from './workingHour_ViewMore/popup.js';

const COLORS = ['#0088FE', '#00C49F'];

const WorkingHour = ({ item }: { item: WorkingHourItems }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const { name, workingHour } = item;
  const totalHours = 10; //could be anything.

  const data = [
    { name: 'WorkingHours', value: workingHour },
    { name: 'TotalHours', value: totalHours },
  ];
  const [openModal, setOpenModel] = useState(false);
  return (
    <div>
      <p className="font-semibold mb-4 text-small">{name}</p>
      <Card className="shadow-small rounded-2xl">
        <div className="text-center">
          <PieChart width={420} height={260}>
            <Pie
              dataKey="value"
              data={data}
              cx="25%"
              cy="50%"
              outerRadius={80}
              innerRadius={65}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend layout="vertical" verticalAlign="bottom" />
            <Tooltip />
          </PieChart>
          <p
            className="text-gray-700 cursor-pointer flex justify-end"
            onClick={() => setOpenPopup(true)}
          >
            View More..
          </p>
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title={name}
          ></Popup>
        </div>
      </Card>
    </div>
  );
};

export default WorkingHour;
