import React from 'react';
import {Button, Table,Modal,Input} from "antd";
import { useState } from 'react';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

export default function Expencess() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource,setDataSource]=useState([
    {
      id: 1,
      category: "John",
      dateofexpence: 23,
      amount: 1000,
      updated:26,
      created:'nik'
    },
    {
      id: 2,
      category: "John",
      dateofexpence: 231,
      amount: 1000,
      updated:26,
      created:'nik'
    },
    {
      id: 3,
      category: "John",
      dateofexpence: 23,
      amount: 1000,
      updated:26,
      created:'nik'
    },
    
  ]);
  const columns =[
    {
      key:'1',
      title:'ID',
      dataIndex:'id',
    },
    {
      key:'2',
      title:'Cateory',
      dataIndex:'category',
    },
    {
      key:'3',
      title:'Date of Expences',
      dataIndex:'dateofexpence',
    },
    {
      key:'4',
      title:'Amount',
      dataIndex:'amount',
    },
    {
      key:'5',
      title:'Updated at',
      dataIndex:'updated',
    },
    {
      key:'6',
      title:'Created by',
      dataIndex:'created',
    },
    {
      key:"5",
      title:"Actions",
      render: (record)=>{
        return (
          <>
          <EditOutlined
          onClick={() => {
            onEditStudent(record);
          }}/>
          <DeleteOutlined onClick={
            ()=>{onDeleteExpences(record)}
          } style={{color:"red",marginLeft:12}}/>
          </>
        );
      },
    },

  ];
  const onAddExpences = () =>{
    const randomEx = parseInt(Math.random()*1000);
    const newExpences={
        id: randomEx,
        category: "John"+randomEx,
        dateofexpence: randomEx,
        amount: randomEx,
        updated:randomEx,
        created:'nik'+randomEx,
      
    };
    setDataSource(pre=>{
      return[...pre,newExpences];
    });
  };
  const onDeleteExpences = (record)=>{
    Modal.confirm({
      title:'Are you sure you want to delete this expence?',
      okText:'Yes',
      okType:'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((Expences) => Expences.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="Expencess h-screen w-full">
        <div className='max-w-[1200px] w-full mx-auto flex justify-between p-3'>
          <h1 className='text-4xl font-bold p-3'>Expencess</h1>
          <div className='p-3 object-right flex'>
            <Input placeholder='Filter By date of Expencess' className='h-8 w-18 m-4 ' />
            <Input placeholder=' Search Expences by name'className='h-8 w-18 m-4' />
            <Button onClick={onAddExpences} className='m-4' >
              +Add expencess
            </Button>
          </div>
        </div>
      <header className='Expencess-header max-w-[1200px] w-full my-auto mx-auto'>
        <Table columns={columns} dataSource={dataSource}>
        </Table>
        <Modal
          title="Edit Expencess"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          Enter ID
          <Input
            value={editingStudent?.id}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, id: e.target.value };
              });
            }}
          />
          Enter Category
          <Input
            value={editingStudent?.category}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, category: e.target.value };
              });
            }}
          />
          Date of expences
          <Input type="date"
            value={editingStudent?.dateofexpence}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, dateofexpence: e.target.value };
              });
            }}
          />
          Enter Amount
          <Input
            value={editingStudent?.amount}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, amount: e.target.value };
              });
            }}
          />
          Updated date
          <Input
            value={editingStudent?.updated}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, updated: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  )
}
