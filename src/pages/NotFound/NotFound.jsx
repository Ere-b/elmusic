import { useNavigate } from 'react-router-dom';
import '../../styles/NotFound.css';
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        돌아가기
      </button>
    </div>
  );
};

export default NotFound;
