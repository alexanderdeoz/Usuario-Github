// aqui se juntan las piesas 
import React from 'react'
import Meme from './Meme'
import { getMemesByPopular,getMemesBySearch } from '../servises/memes'
import Title from './Title'
import Search from './Search'



class MemeContainer extends React.Component {

    constructor(props) {
        // super  es una manera que se va a ejecutar el contructor de componen madre react componen
        super(props)
        this.state = {
            memes: [],
            isFetch: true,
        }
    }

    async componentDidMount() {
        const responseJson = await getMemesByPopular()
        console.log(responseJson)
        this.setState({ memes: responseJson, isFetch: false })

    }


    handleSearch= async (search)=>{
        const responseJson = await getMemesBySearch(search);
        console.log(responseJson);
      //  this.setState({memes:responseJson})
    }


    render() {
        const { isFetch, memes } = this.state
        if (isFetch) {
            return 'Loading...'
        }
        // pasar  valores al componente padre  call back el prop is handleSearch
        return (
            <React.Fragment>
                <Title>Juego de Estrellas</Title>
                <Search  handleSearch={this.handleSearch} />
                <section className="seccion">
                    {
                        memes.map((meme) => <Meme
                            key={meme.id}
                            avatar_url={meme.avatar_url}
                            name={meme.name} />)
                    }
                </section>

            </React.Fragment>

        );
    }

}

export default MemeContainer;