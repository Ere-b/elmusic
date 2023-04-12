import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Top 100 차트로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;
