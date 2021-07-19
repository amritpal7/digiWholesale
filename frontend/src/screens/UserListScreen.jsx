import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { listUsers } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const UserListScreen = ({history}) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
      if(userInfo && userInfo.isAdmin){
        dispatch(listUsers());
      }else {
          history.push('/login')
      }
    }, [dispatch, userInfo, history]);

  const deleteHandler = (id) => {
    console.log('delete');
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>ADMIN</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                    <LinkContainer to={`/user/${user._id}/edit`}>
                        <Button variant='light' className='btn btn-sm'>
                            <i className='fas fa-edit'></i>
                        </Button>
                    </LinkContainer>
                    <Button className='btn btn-sm' variant='danger' onClick={() => deleteHandler(user._id)}>
                        <i className='fas fa-trash'></i>
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
