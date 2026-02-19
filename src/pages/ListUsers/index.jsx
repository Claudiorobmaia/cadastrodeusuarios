import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Trash from '../../assets/trash.svg'
import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser} from './styles'
import { useNavigate } from 'react-router-dom'



function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)
    }

    



    // useEffect(() => toda vez que a tela carregar, o useEffect vai ser executado, e a função dentro dele vai ser chamada

    return (
        <Container>
            <TopBackground />

            <Title>Lista de Usuários</Title>


            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://robohash.org/${user.name}`} alt='Avatar do usuário'/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            
                        </div>
                        <TrashIcon src={Trash} alt='Remover usuário' onClick={() => deleteUser(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button"onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers
