import React, { Fragment } from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaClock, FaTypo3 } from "react-icons/fa"
import { Link } from "gatsby"

const Template = ({ data }) => {
    const { name, timeRequired, timings, entryFees, description: { description} , images1 } = data.place;
    const [ mainImage, ...placeImages] = images1;
    return (
        <Layout>
            <StyledHero img={mainImage.fluid} />
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {placeImages && placeImages.map((item,index) =>{
                            return <Img key={index} fluid={item.fluid} alt="single" className={styles.image}/>
                        })}
                    </div>
                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon} /> Entry Fees - {entryFees}
                        </p>
                        <p>
                            <FaClock className={styles.icon} />Time Required - {timeRequired} hours
                        </p>
                        {timings ?
                            <p>
                                <FaTypo3 className={styles.icon} /> Timings - {timings}
                            </p>:
                            <Fragment></Fragment>
                        }
                    </div>
                    <p className={styles.desc}>{description}</p>
                    <Link to="/places" className="btn-primary">back to places</Link>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query($slug: String!){
    place: contentfulTourismGatsbyData(slug: {eq: $slug}) {
        name
        slug
        timeRequired
        timings
        entryFees
        description{
            description
            }
        images1{
            fluid{
                ...GatsbyContentfulFluid_tracedSVG
            }
        }
    }
}

`
export default Template