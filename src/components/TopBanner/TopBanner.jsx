import "../../styles/style.css";
import "./TopBanner.css";

function TopBanner({ count }) {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner-header'>ToDo List</div>
        <div className='banner-counter'>Completed task(s): {count}</div>
      </div>
    </div>
  );
}

export default TopBanner;
