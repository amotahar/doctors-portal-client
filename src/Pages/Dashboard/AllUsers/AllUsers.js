import { useQuery } from '@tanstack/react-query';
import  { React, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
const AllUsers = () => {



//!Delete
const [deletingUser, setDeletingUser] = useState(null); 

  const closeModal = () => {
    setDeletingUser(null);
  }



  const handleDeleteUser = user => {
    fetch(`https://doctors-portal-server7.vercel.app/users/${user._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Mr/Ms ${user.name} deleted successfully`)
        }
      })
  }









































































    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-portal-server7.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://doctors-portal-server7.vercel.app/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>


        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td>
            <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
              </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>

{
          deletingUser && <ConfirmationModal
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingUser.name}. It cannot be undone.`}
            successAction={handleDeleteUser}
            successButtonName="Delete"
            modalData={deletingUser}
            closeModal={closeModal}
          >
          </ConfirmationModal>
        }











        </div>
    );
};

export default AllUsers;