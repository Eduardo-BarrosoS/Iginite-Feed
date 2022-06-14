import profile from './profileBox.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

export function ProfileBox() {

    return (
        <>
            <aside className={profile.containerProfile}>
                <img src="https://image.shutterstock.com/image-photo/background-beautiful-northern-lights-night-600w-2060967257.jpg" className={profile.cover} />
                <div className={profile.informations}>
                    <Avatar hasBorder src="https://github.com/Eduardo-BarrosoS.png"/>
                    <h4>Leslie Alexandes</h4>
                    <p>UI Designer</p>
                </div>
  
                <footer>
                <a >
                    <PencilLine size={20}/> 
                    <p>Editar seu perfil</p>
                </a>
                </footer>
            </aside>
            
        </>
    )
}