import './styles.css'; 

const CustomTabs = ({
    tabTitles,
    active,
    children,
    onUpdate
  }) => {
    return (
      <div className='tab-container'>
        <div className="tab-header">
          {
            tabTitles.map((title, idx) => (
              <div key={idx} className={`tab ${active == idx ? 'active' : ''}`} style={{width: `calc(100% / ${tabTitles.length})`}} onClick={() => onUpdate(idx)}>
                  {title}
              </div>
            ))
          }
        </div>
        <div className="tab-content">
          {children}
        </div>
      </div>
    )
  }
  
  export default CustomTabs;