import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { useState } from "react";

const Wrapper = styled.div`
    padding: 16px;
    width : cacl(100% -32px);
    display : flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width : 100%;
    max-width : 720px;

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

function PostWritePage(props){
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return(
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event)=>{
                        setTitle(event.target.value);
                    }}>
                    </TextInput>

                    <TextInput
                    height={480}
                    value={content}
                    onChange={(event)=>{
                        setContent(event.target.value);
                    }}>
                    </TextInput>

                    <Button
                        title="글 작성하기"
                        onClick={()=>{
                            navigate("/");
                        }}></Button>


            </Container>
        </Wrapper>
    )
}

export default PostWritePage;