<template>
    <div id="tabla_favs">
        <b-container>
            <h2 class="tabla_favs" style="text-align: center">Personajes favortitos</h2>

            <div class="container table-responsive">
                <b-table>
                    <b-thead>
                        <b-tr>
                            <b-th scope="col">#</b-th>
                            <b-th scope="col">Personaje: </b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr v-fpr="(favorito, i) in favoritos.personajesFav" :key="i">
                            <b-td>{{i+1}}</b-td>
                            <b-td>{{favorito.name}}</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table>
            </div>
        </b-container>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: "tabla_favs",
}
</script>