import React, { useState } from 'react'
import arrow from '../assets/img/arrow-right-short.svg'
import front from '../assets/img/code.svg'
import back from '../assets/img/layout-text-window.svg'
import brand from '../assets/img/shop-window.svg'
import data from '../assets/img/server.svg'

import {Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons';


const Services = () => {
    const [isModalVisible, setIsModalVisible] = useState(null);

    const showModal = (modalId) => {
        setIsModalVisible(modalId);
    };

    const handleCancel = () => {
        setIsModalVisible(null);
    };

    const services = [
        {
            id: 'front',
            title: 'Front-End Dev',
            imgSrc: front,
            description: (
                <>
                    <p>I Use Basic HTML, CSS, TailwindCSS, Bootstrap, JavaScript and ReactJs</p>
                    <p>I work with any Ui/Ux Designs specified by my clients</p>
                    <p>I have more than three years experience.</p>
                </>
            )
        },
        {
            id: 'back',
            title: 'Back-End Dev',
            imgSrc: back,
            description: (
                <>
                    <p>I use Django and Postgres</p>
                    <p>I have about 2 years experience.</p>
                </>
            )
        },
        // {
        //     id: 'brand',
        //     title: 'Brand Designer',
        //     imgSrc: brand,
        //     description: <p><i>Coming Soon...</i></p>
        // },
        {
            id: 'data',
            title: 'Data Scientist',
            imgSrc: data,
            description: <p><i>Coming Soon...</i></p>
        }
    ];

  return (
    <section class="services" id="services">
        <h2>Services</h2>
        <div class="underline"></div>
        <div class="services-card">
            {services.map((service, index) => (
            <div class="card" key={service.id}>
                <img src={service.imgSrc} alt=""/>
                <p class="class-title">{service.title}</p>
                <span class="toggle" id="toggle-front" onClick={() => showModal(service.id)}>View More <img src={arrow} alt=""/></span>
            </div>
            ))}
        </div>

        {services.map(service => (
                <Modal
                    key={service.id}
                    open={isModalVisible === service.id}
                    title={service.title}
                    onCancel={handleCancel}
                    footer={null}
                    closeIcon={<CloseOutlined />}
                >
                    {service.description}
                </Modal>
            ))}
    </section>
  )
}

export default Services