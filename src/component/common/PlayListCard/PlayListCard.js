import { format } from 'date-fns';
import './PlayListCard.scss';
import { DeleteOutlined } from '@ant-design/icons';

function PlaylistCard({ name, createdOn, handleDetail, handleDelete }) {
  return (
    <section className="playlistCard">
      <div>{name}</div>
      <div className="created-date">
        Created on: {format(new Date(createdOn), `dd/MM/yyyy`)}
      </div>
      <button onClick={handleDelete} className="click-btn">
        <DeleteOutlined />
      </button>
      <a className="clickable" onClick={handleDetail} />
    </section>
  );
}

export default PlaylistCard;