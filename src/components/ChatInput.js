import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import db from '../firebase';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { collection, doc, addDoc, serverTimestamp } from 'firebase/firestore';

function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth)

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        const docRef = doc(db, "rooms", channelId);
        const colRef = collection(docRef, "messages")
        addDoc(colRef, {
            message: input,
            timestamp: serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        });

        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        })

        setInput('');
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <Button hidden type='submit' onClick={sendMessage}></Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        display: flex;
        justify-content: center;
        position: relative;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;

    > form > button {
        display: none !important;
    }
    }
`;