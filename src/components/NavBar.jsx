function NavBar (props){
const {navigation,bar} = props

return (
    <div>
<button onClick={bar}>Précédent</button>
<button onClick={navigation}>Suivant</button>
</div>
) 

}

export default NavBar;