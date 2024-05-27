import useSWR from 'swr';
import BarChat from './barChat.js'

export default function GetData(props){
    const fetcher = (url) => fetch(url)
          .then((response) => {
             return response.json();
           })  
    const { data, error, isLoading } = useSWR(
        props.URL,
         fetcher)

    if (isLoading) return <h4>Waiting for a second</h4>
    if (error) return <h4>ERROR</h4>
    return (
        <BarChat 
        data = {data}
        width = {props.width} 
        height = {props.height} 
        padding = {props.padding}
        />    
    )           
}