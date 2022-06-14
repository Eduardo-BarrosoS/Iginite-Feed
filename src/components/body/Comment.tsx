import style from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { useState } from 'react'

interface CommentProps {
    content: String,
    onDeleteComment: (comment: String) => void,
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)
  
    function handleLikeComment() {
        setLikeCount(state => state + 1)
    }


    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <>
            <div className={style.comment}>
                <Avatar hasBorder={false} src="https://github.com/Eduardo-BarrosoS.png" alt="imagem de perfil" />
                <div className={style.commentBox}>
                    <div className={style.commentContent}>
                        <header>
                            <div>
                                <strong>Eduardo Barroso</strong>
                                <time dateTime='2022-06-11 23:03:00' title='11 de junho de 2022 ás 23:03h'>
                                    cerca de 3h  atrás
                                </time>
                            </div>
                            <button  onClick={handleDeleteComment}title='Deletar comentário'>
                                <Trash size={24}/>
                            </button>
                        </header>

                        <p>{ content }</p>
                    </div>
                    <footer>
                        <button title='Curtir' onClick={handleLikeComment}>
                            <ThumbsUp />  Aplaudir 
                            <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>

            </div>
        </>
    )
}