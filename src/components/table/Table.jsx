import React, {useState} from 'react'

import './table.css'

const Table = (props) => {
    const initDataShow = props.itemsPerPage && props.bodyData ?
                props.bodyData.slice(0, Number(props.itemsPerPage)) :
                props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow);

    let pages = 1
    let range = []

    if (props.itemsPerPage !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.itemsPerPage))
        pages = props.bodyData.length % Number(props.itemsPerPage) === 0 ? page : page+1
        range = [...Array(pages).keys()]
    }

    const [currentPage, setCurrentPage] = useState(1);

    const selectPage = page => {
        const start = Number(props.itemsPerPage) * (page - 1)
        const end = start + Number(props.itemsPerPage)
        setDataShow(props.bodyData.slice(start, end))
        setCurrentPage(page)
    }
    

  return (
    <div>
        <div className="table-wrapper">
            <table>
                {
                    props.headData && props.renderHead && (
                        <thead>
                            <tr>
                                {
                                    props.headData.map((item, index) => 
                                        props.renderHead(item, index)
                                    )
                                }
                            </tr>
                        </thead>
                    )
                }
                {
                    props.bodyData && props.renderBody && (
                        <tbody>
                            {
                                dataShow.map((item, index) => 
                                    props.renderBody(item, index)
                                )
                            }
                        </tbody>
                    )
                }
            </table>
        </div>
        {
            pages > 1 && (
                <div className="table-pagination">
                    {
                        range.map((item, index) => (
                            <div key={index} className={
                                    `table-pagination-item ${currentPage === index+1 && 
                                        'active'
                                }`} onClick={() => selectPage(index+1)}>
                                {item + 1}
                            </div>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Table