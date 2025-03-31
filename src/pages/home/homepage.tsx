
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
                    <p className='text-3xl  underline'>Vista da serra</p>
                    <img src="img1.jpg" alt="Vista da serra" />
                </div>
                <div className="text-container">
                    <div className="text1">
                        <h1 className='text-3xl  underline'>Lorem ipsum dolor.</h1>
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
                <h1 className=' text-3xl underline'>Lorem</h1>
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

            <section className='galeria'>
                <h1 className='principal'>NOSSA GALERIA</h1>
                <div>
                    <h2>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, facere eaque numquam sed quod est corrupti impedit modi dolores minus culpa at similique sit voluptas ducimus ab. Officia, voluptates quis?
                    </h2>
                    <Carousel />
                </div> <div>
                    <Carousel />
                </div> <div>
                    <Carousel />
                </div>
            </section >








            <section className='flex justify-center frame-lorem '>
                <button className="frame-button rounded-2xl bg-green-500 w-auto h-20  cursor-pointer underline text-2xl text-white border-b border-solid border-white ">
                    Quero me hospedar
                </button>
            </section>



            <section className='contato '>
                <h2 className='text-xl font-semibold mb-4'>Entre em Contato Contato Para mais Informaçoes</h2>
                <form className='space-y-3'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Nome</label>
                        <input type='text' className='w-full p-2 border rounded-lg' placeholder='ex: joão da silva' required />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Número de Telefone</label>
                        <input type='tel' className='w-full p-2 border rounded-lg' placeholder='(99) 99999-9999' required />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>E-mail</label>
                        <input type='email' className='w-full p-2 border rounded-lg' placeholder='seuemail@email.com' required />
                    </div>
                    <button className="frame-button rounded-2xl bg-green-500 w-auto h-20  cursor-pointer underline text-2xl text-white border-b border-solid border-white ">
                        Enviar
                    </button>
                </form>
            </section>

        </div >
    )
}