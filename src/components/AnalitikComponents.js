import React from 'react'

const mapStateToProps = (state) => {
    return {
        getLoggingList: state.inventorys.getLoggingList,
        errorLoggingList: state.inventorys.errorLoggingList,
    };
  };

const AnalitikComponents = () => {
    return (
        <div>
            
        </div>
    )
}

export default connect(mapStateToProps, null)(AnalitikComponents);