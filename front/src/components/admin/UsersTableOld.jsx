import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
import admin_add_icon from '../../assets/images/admin/admin_add_icon.svg';
import admin_edit_icon from '../../assets/images/admin/admin_edit_icon.svg';
import admin_delete_icon from '../../assets/images/admin/admin_delete_icon.svg';

const UserTableOld = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const { toast } = useToast();
  const [users, setUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    isAdmin: false,
    address: '',
  });

  const [updatedUser, setUpdatedUser] = useState({
    id: null,
    username: '',
    email: '',
    isAdmin: false,
    address: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    if (newUser.password !== newUser.password_confirmation) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Las contraseñas no coinciden',
      });
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/users`, newUser);
      setUsers([...users, response.data]);
      setShowCreateModal(false);
      setNewUser({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        isAdmin: false,
        address: '',
      });
      toast({
        title: 'Listo!',
        description: 'Usuario creado correctamente',
        className:
          'bg-[#a78567] text-white font-semibold border-2 border-[#997a5f]',
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.data) {
        const errors = error.response.data.data;
        if (errors.username) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: `Username: ${errors.username[0]}`,
          });
        }
        if (errors.email) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: `Email: ${errors.email[0]}`,
          });
        }
        if (errors.password) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: `Password: ${errors.password[0]}`,
          });
        }
      } else {
        console.error('Error al crear usuario:', error);
      }
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `${apiUrl}/users/${updatedUser.id}`,
        updatedUser,
      );
      setUsers(
        users.map((user) =>
          user.id === updatedUser.id ? response.data : user,
        ),
      );
      setShowUpdateModal(false);
      setUpdatedUser({
        id: null,
        username: '',
        email: '',
        isAdmin: false,
        address: '',
      });
      toast({
        title: 'Listo!',
        description: 'Usuario actualizado correctamente',
        className:
          'bg-[#a78567] text-white font-semibold border-2 border-[#997a5f]',
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.data) {
        const errors = error.response.data.data;
        if (errors.username) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: `Username: ${errors.username[0]}`,
          });
        }
        if (errors.email) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: `Email: ${errors.email[0]}`,
          });
        }
      } else {
        console.error('Error al actualizar usuario:', error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/users/${userToDelete}`);
      setUsers(users.filter((user) => user.id !== userToDelete));
      setUserToDelete(null);
      toast({
        title: 'Listo!',
        description: 'Se ha eliminado el usuario correctamente',
        className:
          'bg-[#a78567] text-white font-semibold border-2 border-[#997a5f]',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Whoops!',
        description: 'No se ha podido eliminar el usuario',
      });
      console.error('Error al eliminar usuario:', error);
    }
  };

  const confirmDelete = (id) => {
    setUserToDelete(id);
  };

  const handleEdit = (user) => {
    setUpdatedUser(user);
    setShowUpdateModal(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row-reverse mb-4">
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-1 bg-[#C39898] hover:bg-[#A67C7C] border-2 border-[#A87676] font-semibold text-white rounded-md"
        >
          <div className="flex items-center gap-1">
            <img
              src={admin_add_icon}
              alt="Icono de añadir"
              className="w-5 h-5"
            />
            Añadir usuario
          </div>
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#a79277] text-white font-semibold text-base">
          <tr>
            <th className="py-1.5 px-4">ID</th>
            <th className="py-1.5 px-4">Username</th>
            <th className="py-1.5 px-4">Email</th>
            <th className="py-1.5 px-4">Is Admin</th>
            <th className="py-1.5 px-4">Address</th>
            <th className="py-1.5 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 font-semibold text-sm">
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-1.5 px-4 text-center">{user.id}</td>
              <td className="py-1.5 px-4">{user.username}</td>
              <td className="py-1.5 px-4">{user.email}</td>
              <td className="py-1.5 px-4 text-center">
                {user.isAdmin ? (
                  <span className="inline-block px-3 py-0.5 text-sm font-semibold border-2 border-[#745B5B] bg-[#867070] text-white rounded-full">
                    Admin
                  </span>
                ) : (
                  <span className="inline-block px-3 py-0.5 text-sm font-semibold border-2 border-[#A87676] bg-[#CA8787] text-white rounded-full">
                    Usuario
                  </span>
                )}
              </td>
              <td className="py-1.5 px-4">{user.address}</td>
              <td className="py-1.5 px-4 flex space-x-2 justify-center">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-[#BCA78B] hover:bg-[#9E896D] border-2 border-[#a79277] rounded-md p-1.5"
                >
                  <img
                    src={admin_edit_icon}
                    alt="Icono de editar"
                    className="w-5 h-5"
                  />
                </button>
                <button
                  onClick={() => confirmDelete(user.id)}
                  className="bg-[#BCA78B] hover:bg-[#9E896D] border-2 border-[#a79277] rounded-md p-1.5"
                >
                  <img
                    src={admin_delete_icon}
                    alt="Icono de eliminar"
                    className="w-5 h-5"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {userToDelete !== null && (
        <DeleteConfirmationModal
          onConfirm={handleDelete}
          onCancel={() => setUserToDelete(null)}
        />
      )}
      {showCreateModal && (
        <UserFormModal
          user={newUser}
          onChange={setNewUser}
          onSubmit={handleCreate}
          onCancel={() => setShowCreateModal(false)}
        />
      )}
      {showUpdateModal && (
        <UserUpdateFormModal
          user={updatedUser}
          onChange={setUpdatedUser}
          onSubmit={handleUpdate}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  );
};

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Confirmar eliminación</h2>
      <p className="mb-4">¿Estás seguro de que deseas eliminar este usuario?</p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md"
        >
          Eliminar
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-200 text-black rounded-md"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
);

const UserFormModal = ({ user, onChange, onSubmit, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Crear usuario</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => onChange({ ...user, username: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C39898]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => onChange({ ...user, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C39898]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => onChange({ ...user, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C39898]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Confirmar Password</label>
          <input
            type="password"
            value={user.password_confirmation}
            onChange={(e) =>
              onChange({ ...user, password_confirmation: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C39898]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Is Admin</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={user.isAdmin}
              onChange={(e) => onChange({ ...user, isAdmin: e.target.checked })}
              className="focus:outline-none focus:ring-2 focus:ring-[#C39898]"
            />
            <span className="ml-2">Es Admin</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Address</label>
          <input
            type="text"
            value={user.address}
            onChange={(e) => onChange({ ...user, address: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C39898]"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
          >
            Crear
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-200 text-black rounded-md"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
);

const UserUpdateFormModal = ({ user, onChange, onSubmit, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Actualizar usuario</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => onChange({ ...user, username: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C39898]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => onChange({ ...user, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C39898]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Is Admin</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={user.isAdmin}
              onChange={(e) => onChange({ ...user, isAdmin: e.target.checked })}
              className="focus:outline-none focus:ring-2 focus:ring-[#C39898]"
            />
            <span className="ml-2">Es Admin</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Address</label>
          <input
            type="text"
            value={user.address}
            onChange={(e) => onChange({ ...user, address: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C39898]"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
          >
            Actualizar
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-200 text-black rounded-md"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default UserTableOld;
