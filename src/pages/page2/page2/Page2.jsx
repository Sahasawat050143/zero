import React, {useState} from 'react'
import { Table } from "antd"
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export const Page2 = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  

  const columns = [
    {
      title: 'Display City',
      dataIndex: 'cityDisplay',
      key: 'cityDisplay',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'City Value',
      dataIndex: 'cityValue',
      key: 'cityValue',
    }
  ];

  const onSearchClick = () => {
      setLoading(true)
      axios.post(
        "http://hyper-runtime-dev.techberry.co.th/apis/oneclick-getcity-44152", {}
      ).then(res => {
          const {ReturnCode, content, _hyper_code} = res.data
          
          if(_hyper_code == "200"){
            console.log('content.dataList', content.dataList);
            setData(content.dataList)
            setLoading(false)
          }else {
            setLoading(false)
          }
      })
  }

  return (
    <>
      <div
        className="container p-5 bg-light rounded shadow"
        style={{ marginTop: "50px" }}
      >
        <div className='d-flex'>
          <button className='btn btn-primary' onClick={() => navigate("/")}>Back</button>
        </div>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-primary' onClick={() => onSearchClick()}>Search</button>
        </div>
        <Table columns={columns} dataSource={data} pagination={true} loading={loading}/>
      </div>
    </>
  )
}
