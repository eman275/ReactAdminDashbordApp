import React , {useState} from 'react' 
import './userList.css'
import { DataGrid } from "@material-ui/data-grid";
import {Link} from "react-router-dom";
// import UserAvater from '../../images/avatar.svg'
import {DeleteOutline} from "@material-ui/icons"
import {userRows} from  '../../data'


  

  

const UserList = () => {
    const [data,setDate] = useState(userRows);
      const handelDelete =(id)=>{
             setDate(data.filter(item=>item.id !==id));
      }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'User', headerName: 'user', width: 200  , renderCell : (params)=>{
            return (
                <div className="UserListUser">
                    <img  className="UserListImg" src={params.row.avatar} alt=""/>
                    {params.row.UserName}
                </div>
            )
        }},
        { field: 'email', headerName: 'email', width: 200 },
        {field: 'status',headerName: 'status',width: 120 },
        {field: 'transaction',headerName: 'transaction volume',width: 180 },
        {field: 'action ',headerName: 'Action',width: 150, renderCell:(params)=>{
              return (
                  <>
                  <Link to={"/user/"+ params.row.id}>
                  <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline className="userListDelete" onClick={()=>handelDelete(params.row.id)}/> </>
              );
        }  },
        
      ];
    return (
        <div className="userList">

      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
        </div>
    )
}

export default UserList
