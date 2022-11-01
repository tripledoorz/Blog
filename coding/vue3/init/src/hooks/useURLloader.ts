import { reactive } from 'vue';
import axios from 'axios'
const useURLLoader = (url) => {
    const data = reactive({
        result: null,
        loading: true,
        loaded: false,
        error:null
    })
    axios.get(url).then(resp => { 
        data.result = resp.data
        data.loaded = true
    }).catch((error) => {
        data.error = error.message
    })
}
