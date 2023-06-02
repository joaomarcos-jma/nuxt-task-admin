<template>
  <div>
    <div class="ma-2 mt-2 text-right">
       <b-button pill variant="primary">Add</b-button>
      <b-button to="/" pill variant="outline-secondary">Go Back</b-button>
    </div>
    <b-container>
      <!-- Main table element -->
      <b-table
        :items="entities"
        :fields="fields"
        :current-page="currentPage"
        :per-page="0"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        stacked="md"
        show-empty
        small
      >
        <template #cell(name)="row"> {{ row.value }} {{ row.value }} </template>

        <template #cell(actions)="row">
          <b-button
            size="sm"
            class="mr-1"
            @click="info(row.item, row.index, $event.target)"
          >
            Info modal
          </b-button>
          <b-button size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          </b-button>
        </template>

        <template #row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">
                {{ key }}: {{ value }}
              </li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <b-row>
        <b-col sm="5" md="6" class="my-1">
          <b-form-group
            label="Per page"
            label-for="per-page-select"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
            ></b-form-select>
          </b-form-group>
        </b-col>

        <b-col sm="7" md="6" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="pagination.total"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>

      <!-- Info modal -->
      <b-modal
        :id="infoModal.id"
        :title="infoModal.title"
        ok-only
        @hide="resetInfoModal"
      >
        <pre>{{ infoModal.content }}</pre>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'House Rule Name',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'active',
          label: 'Is Active',
          formatter: (value, key, item) => {
            return value ? 'Yes' : 'No'
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: 'actions', label: 'Actions' },
      ],
      currentPage: 1,
      perPage: 10,
      totalItems: 0,
      pageOptions: [5, 10, 15, { value: 100, text: 'Show a lot' }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
    }
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key }
        })
    },
    ...mapState('house', ['entities', 'pagination', 'loading']),
  },
  watch: {
    perPage(val) {
      if (val) {
        this.getHouseRulesList(this.currentPage, val)
      }
    },
    currentPage(val, old) {
      if (val) {
        this.getHouseRulesList(val, this.perPage)
      }
    },
  },
  beforeMount() {
    this.getHouseRulesList(this.currentPage, this.perPage)
  },
  methods: {
    getHouseRulesList(currentPage, perPage) {
      this.$store.dispatch('house/getHouseRulesList', {
        page: currentPage,
        per_page: perPage,
      })
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
  },
}
</script>
