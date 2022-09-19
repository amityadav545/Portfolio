import React from 'react'
import Navbar from './Navbar'
import Project_Box from './Project_Box'


export default function Project() {
    return (
        <>

            <div className='container-fluid '>
                <div className='row'>
                    <Project_Box project_name="something" project_dic="With supporting text below as a natural lead-in to additional content." />
                    <Project_Box project_name="something" project_dic="With supporting text below as a natural lead-in to additional content." />
                    <Project_Box project_name="something" project_dic="With supporting text below as a natural lead-in to additional content." />
                    <Project_Box project_name="something" project_dic="With supporting text below as a natural lead-in to additional content." />
                    <Project_Box project_name="something" project_dic="With supporting text below as a natural lead-in to additional content." />
                    <Project_Box project_name="something" project_dic="With supporting text below as a natural lead-in to additional content." />


                </div>
                <div className='text-center'>
                    <button type="button" class="btn btn-outline-secondary mx-2 my-4">Prev</button>
                    <button type="button" class="btn btn-outline-secondary mx-2 my-4">Next</button>
                </div>
            </div>
        </>
    )
}
