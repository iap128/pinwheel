import { FC, useState } from 'react';
import { ExtrasProps } from '../constants/interfaces';
import { Button, Card, Modal, Statistic } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  extras: ExtrasProps[];
  suffix: string;
}

const CardExtras: FC<Props> = ({ extras, suffix }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button shape="circle" size="small" onClick={() => setOpen(true)} icon={<DownOutlined />} />
      <Modal title="Historical View" open={open} onCancel={() => setOpen(false)} footer={[]}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          {extras.map(extra => (
            <Card key={extra.label}>
              <Statistic
                title={extra.label}
                value={extra.value}
                prefix={<FontAwesomeIcon icon={extra.icon} />}
                suffix={suffix}
                precision={2}
              />
            </Card>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CardExtras;
