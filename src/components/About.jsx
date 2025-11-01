import { Fragment } from "react"
import icono from "../images/icono.png"

const About = () => {
    return (
        <div className="container">
            <h1 className="text-center">About</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt harum provident quidem laborum. Possimus sed perspiciatis beatae! Officia, doloribus numquam ex sint animi asperiores atque qui assumenda maxime necessitatibus. Voluptatum cupiditate delectus corrupti, animi explicabo, voluptas saepe reiciendis odio, perspiciatis consequuntur provident sapiente hic minus. Cupiditate, voluptates molestiae. Doloribus provident vero dignissimos iste nesciunt mollitia nostrum eum, est eaque inventore labore voluptatem ullam quas unde. Nemo, perferendis dolore. Atque quo ducimus, consequatur deleniti commodi obcaecati facere error a dolores illo quam amet quas tenetur, explicabo aut enim aliquam eveniet vel maiores tempore necessitatibus, sequi eaque hic. Reiciendis iusto aut est rerum accusantium at fugiat incidunt debitis distinctio, deserunt blanditiis optio odit molestias nobis nesciunt suscipit recusandae, eius ducimus adipisci voluptas. Eveniet, hic asperiores quos quasi saepe vitae dicta! Culpa ea quod atque totam autem reiciendis quaerat temporibus mollitia doloremque eius quam qui, voluptate iure distinctio laboriosam ducimus incidunt itaque reprehenderit harum, aliquid similique error quia fuga. Sequi unde quam neque magnam veritatis fuga perspiciatis. Harum magni placeat quas quod veritatis voluptatem sit accusantium delectus ea. Nesciunt nulla optio exercitationem maiores cumque, aliquid, quaerat amet reiciendis tenetur veritatis debitis voluptatem ipsa nihil totam hic sapiente deleniti nam suscipit quod accusamus molestiae cum distinctio id ullam. Exercitationem molestiae iste quam. Nisi, iusto, maiores quisquam repellat libero numquam ex, tempora quasi officiis rem voluptatum aliquam sequi voluptas aperiam mollitia non enim eaque facere explicabo tenetur pariatur accusantium hic fuga. Eligendi debitis perspiciatis aspernatur provident excepturi porro odio accusamus veritatis expedita architecto, laboriosam libero in et sapiente consequatur veniam ad doloremque repudiandae, rerum rem magnam ab delectus animi? Consequatur ratione accusantium libero in et veritatis non, soluta explicabo optio ullam aspernatur iusto obcaecati laudantium porro unde culpa magnam blanditiis vero quod totam recusandae alias enim molestias! Voluptates maiores, natus illum in ducimus architecto.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a consequatur ab sapiente repellat cupiditate excepturi error asperiores beatae fuga dolore itaque doloremque consequuntur rerum odio explicabo illo quo, quia quisquam inventore modi tempore unde sed vitae? Ut, architecto repudiandae debitis illum deserunt laborum cumque est quia ea natus, nesciunt iste illo voluptas eos perspiciatis quae earum delectus sed itaque esse ab rerum atque quas? Facere atque ipsa deserunt sequi est unde perspiciatis iste eaque quibusdam quisquam voluptas illum officiis ullam, impedit commodi incidunt modi repellendus aperiam aut quo quam eius vitae aspernatur. Veniam molestiae fuga sequi repellat minima corrupti.</p>
            <hr className="m-5"/>
            <div className="d-flex justify-content-around align-items-center mt-5">
                <div className="card text-center d-flex flex-column align-items-center rounded-4 overflow-hidden" style={{width: "12rem"}}>
                    <h3 className="card-title bg-dark text-white ">Flask con React</h3> 
                    <img src={icono} alt="Mi foto de perfil" className="img-fluid" style={{width: "8rem"}}/>
                </div>
                <div className="card text-center d-flex flex-column align-items-center rounded-4 overflow-hidden" style={{width: "12rem"}}>
                    <h3 className="card-title bg-dark text-white ">Flask con React</h3> 
                    <img src={icono} alt="Mi foto de perfil" className="img-fluid" style={{width: "8rem"}}/>
                </div>
                <div className="card text-center d-flex flex-column align-items-center rounded-4 overflow-hidden" style={{width: "12rem"}}>
                    <h3 className="card-title bg-dark text-white ">Flask con React</h3> 
                    <img src={icono} alt="Mi foto de perfil" className="img-fluid" style={{width: "8rem"}}/>
                </div>
            </div>
        </div>
    )
}
export default About