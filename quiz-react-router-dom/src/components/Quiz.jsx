import { FormControl, Stack, Radio, RadioGroup } from '@chakra-ui/react'
import React, { Component } from 'react';
import { DivForm } from '../style/StyleGlobal';

class Quiz extends Component {

    constructor(){
        super()
        this.state={
            loader: true,
            numberQuestion:0,
            question:{
                question: '',
                a: '',
                b: '', 
                c: '',
                d:'',
                correct: ''
            },
            answerSelect: '',
            score: 0
        }
    }

   

    render() {
        return (
            <DivForm>
                <FormControl>
                    <h1>Titulo o pregunta</h1>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio value='1'>First</Radio>
                            <Radio value='2'>Second</Radio>
                            <Radio value='3'>Third</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>
            </DivForm>
        );
    }
}

export default Quiz;