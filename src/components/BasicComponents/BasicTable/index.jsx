import React from 'react'

const BasicTable = (
    columns,
    dataSource,
) => {
    return (
        <div>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    )
}

export default BasicTable

