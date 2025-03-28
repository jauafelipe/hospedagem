
import { Button } from '@mui/material'
import './home.css'
import { Carousel } from '../../component/swiper/carousel/carouse'
import { Link } from 'react-router'

const content = {
    h1: 'Pronto para sua proxima Hospedagem ?',
    p: 'oferecemos acomodações confortaveis com excelente localização e atendimento de qualidade faça sua reserva hoe mesmo e desfrute de momentos inesqueciveis'
}
export const Home = () => {
    return (
        <div>
            <main className=" main-menu flex items-center justify-center bg-green-600 p-10 mb-1">
                <div className="m-20 flex items-center justify-center gap-10 max-w-4xl mx-auto max-sm:flex max-sm:flex-col-reverse ">
                    {/* Conteúdo de Texto */}
                    <div className="text-center md:text-left justify-center items-center max-sm:max-w-100">
                        <h1 className="text-4xl font-bold underline text-white">{content.h1}</h1>
                        <p className="text-lg text-white px-6 py-2 mx-auto ">{content.p}</p>
                        <Link to={"/formulario"}>
                            <button className="button bg-green-500 w-50 h-20  cursor-pointer underline text-2xl text-white border-b border-solid border-white ">
                                Estou Pronto
                            </button>

                        </Link>

                    </div>

                    {/* Imagem Lateral */}
                    <img
                        src="https://media.istockphoto.com/id/535499464/pt/foto/el-yunque-n%C3%A9voa-da-manh%C3%A3.jpg?s=612x612&w=0&k=20&c=oYJq_VzMzjeQ4ppoPb6vcOzBdCOKPMuWTasTTKFPCK4="
                        alt="Imagem de exemplo"
                        className="w-67 h-90 object-cover rounded-lg shadow-black"
                    />
                </div>
            </main>





            <section className='sec-title flex justify-center frame-lorem '>
                <h1 className='text-3xl  underline '>Sobre Nos</h1>
            </section>


            <section className="card">
                <div className="image-container">
                    <p>Vista da serra</p>
                    <img src="img1.jpg" alt="Vista da serra" />
                </div>
                <div className="text-container">
                    <div className="text1">
                        <h1>Lorem ipsum dolor.</h1>
                    </div>
                    <div className="text2">
                        <h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Pariatur atque doloribus voluptatum, eos odit fugiat harum
                            voluptas ratione sequi, sed, rerum ipsam numquam. Nam itaque,
                            maxime rerum assumenda earum aspernatur.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Pariatur atque doloribus voluptatum, eos odit fugiat harum
                            voluptas ratione sequi, sed, rerum ipsam numquam. Nam itaque,
                            maxime rerum assumenda earum aspernatur.
                        </h1>
                    </div>
                    <Link to={"/formulario"}>
                        <button className="button bg-green-500 w-50 h-20  cursor-pointer underline text-2xl text-white border-b border-solid border-white ">
                            quero conhecer
                        </button>
                    </Link>
                </div>
            </section>

            <section className='more-container'>
                <h1>Lorem</h1>
                <div className="more">
                    <div className='image-container'>
                        <p className="image-text">Lazer</p>
                        <img src="lazer.jpg" alt="" />
                    </div>
                    <div className='image-container'>
                        <p className="image-text">Natureza</p>
                        <img src="lazer.jpg" alt="" />
                    </div>
                    <div className='image-container' >
                        <p className="image-text">Paisagem</p>
                        <img src="lazer.jpg" alt="" />
                    </div>
                    <div className='image-container'>
                        <p className="image-text">Quartos</p>
                        <img src="lazer.jpg" alt="" />
                    </div>
                    <div className='image-container' >
                        <p className="image-text">Churrasco</p>
                        <img src="lazer.jpg" alt="" />
                    </div   >
                    <div className='image-container'>
                        <p className="image-text">e muito mais</p>
                        <img src="lazer.jpg" alt="" />
                    </div>
                </div>


            </section >

            <section>
                <h1 className=''>NOSSA GALERIA</h1>
                <Carousel />
            </section>








            <section className='flex justify-center frame-lorem '>
                <button className="frame-button rounded-2xl bg-green-500 w-auto h-20  cursor-pointer underline text-2xl text-white border-b border-solid border-white ">
                    Quero me hospedar
                </button>
            </section>


            <footer className="h-full flex flex-col justify-center items-center bg-gray-900 text-white p-10">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Venha conhecer nossa hospedagem e lazer para você e sua família
                </h2>

                <p className="text-gray-300 text-center max-w-lg mb-6">
                    Oferecemos conforto, tranquilidade e experiências inesquecíveis. Entre em contato e faça já sua reserva!
                </p>




                {/* Formulário de Contato */}
                <form className="w-full max-w-md flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Seu Nome"
                        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                    />
                    <input
                        type="email"
                        placeholder="Seu E-mail"
                        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                    />
                    <textarea
                        placeholder="Sua Mensagem"
                        style={{ resize: "none" }}
                        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                    ></textarea>
                    <Button style={{ color: "white", backgroundColor: "oklch(0.627 0.194 149.214)" }} size="small" className="mt-6">
                        Quero Conhecer
                    </Button>
                </form>

                {/* Botão de Ação */}

            </footer>

        </div >
    )
}