import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Axios from 'axios';
import { UserForm } from './UserForm';
import { UsersTable } from './UsersTable';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  // run when page load
  useEffect(() => {
    getUsers();
  }, []);

  // get users
  const getUsers = () => {
    Axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data?.response || []);
      })
      .catch(error => {
        console.error("Axios Error:", error);
      });
  };

  // create user
  const createUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('http://localhost:3001/api/createuser', payload)
      .then(response => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch(error => {
        console.error("Axios Error:", error);
      })
      .finally(() => {
        setSubmitted(false);
      });
  };

  // update user
  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('http://localhost:3001/api/updateuser', payload)
      .then(response => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch(error => {
        console.error("Axios Error:", error);
      })
      .finally(() => {
        setSubmitted(false);
      });
  };


//delete user
const deleteUser = (id) => {
  Axios.delete(`http://localhost:3001/api/deleteuser/${id}`)
  .then(() => {
     getUsers();
     
  })
  .catch(error => {
     console.error("Axios Error:", error);
  })
 
 }


  return (
    <Box
      sx={{
        width: 'calc(100% - 100px)',
        margin: 'auto',
        marginTop: '100px',
      }}
    >
      <UserForm
        createuser={createUser}
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UsersTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={data=> window.confirm("Are you sure you want to delete user ?") && deleteUser(data)}
      />
    </Box>
  );
};
