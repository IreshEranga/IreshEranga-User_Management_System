import { TableBody, TableCell, TableContainer, TableRow , TableHead, Table, Paper, Button} from '@mui/material'
import React from 'react'
//import { Users } from './Users';

export const UsersTable = ({rows,selectedUser,deleteUser}) => {

    
 //const users = rows; 

 return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => {
                        return (
                            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border:0}}}>
                                <TableCell component='th' scope='row'>{row.id}</TableCell>
                                <TableCell component='th' scope='row'>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{margin:'0px 10px'}}
                                        onClick={()=>selectedUser({id:row.id, name: row.name})}
                                    >Update</Button>

                                    <Button
                                        sx={{margin:'0px 10px'}}
                                        onClick={()=> deleteUser(row.id)}
                                    >Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                        
                    }) : (
                        <TableRow sx={{'&:last-child td, &:last-child th' : {border:0}}}>
                            <TableCell component='th' scope='row'>No data</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
 )
}