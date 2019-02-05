<template>
  <div class="dashboard-container">
    <div id="app">
      <infinite-slide-bar :barStyle="{ background: '#fff7cc', padding: '5px 0' }">
        <span
          style="color: #f60;"
        >QUOTE OF THE DAY: Your time is limited, so don't waste it living someone else's life.</span>
      </infinite-slide-bar>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card emp-sts">
            <div slot="header" class="clearfix">
              <span>Employee Status</span>
            </div>
            <el-badge :value="gridData.length" class="item" type="success">
              <el-popover
                placement="top-start"
                title="Employee Present"
                width="300"
                trigger="hover"
                content="this is content"
              >
                <el-table :data="gridData">
                  <el-table-column width="150" property="name" label="name"></el-table-column>
                  <el-table-column width="200" property="email" label="email"></el-table-column>
                </el-table>
                <el-button slot="reference" type="success" round>Present</el-button>
              </el-popover>
            </el-badge>
            <el-badge :value="gridData.length" class="item">
              <el-popover
                placement="top-start"
                title="Employee Absent"
                width="300"
                trigger="hover"
                content="this is content"
              >
                <el-table :data="gridData">
                  <el-table-column width="150" property="name" label="name"></el-table-column>
                  <el-table-column width="200" property="email" label="email"></el-table-column>
                </el-table>
                <el-button slot="reference" round type="danger" id="absent">Absent</el-button>
              </el-popover>
            </el-badge>
            <el-badge :value="gridData.length" class="item">
              <el-popover
                placement="top-start"
                title="Employee onLeave"
                width="300"
                trigger="hover"
                content="this is content"
              >
                <el-table :data="gridData">
                  <el-table-column width="150" property="name" label="name"></el-table-column>
                  <el-table-column width="200" property="email" label="email"></el-table-column>
                </el-table>
                <el-button slot="reference" round type="warning" id="absent">On Site</el-button>
              </el-popover>
            </el-badge>
            <el-badge :value="gridData.length" class="item">
              <el-popover
                placement="top-start"
                title="Employee onLeave"
                width="300"
                trigger="hover"
                content="this is content"
              >
                <el-table :data="gridData">
                  <el-table-column width="150" property="name" label="name"></el-table-column>
                  <el-table-column width="200" property="email" label="email"></el-table-column>
                </el-table>
                <el-button slot="reference" round type="primary" id="absent">Late Comer</el-button>
              </el-popover>
            </el-badge>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>News and Updates</span>

              <el-button icon="el-icon-edit" style="float: right">Edit</el-button>
              <el-button
                icon="el-icon-check "
                type="primary"
                style="float: right; margin-right: 20px"
              >Add</el-button>
            </div>
            <p>Hello World.</p>
          </el-card>
        </el-col>
      </el-row>
      <div id="calender">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Calender</span>
          </div>
          <v-calendar :attributes="attrs" :pane-width="610" is-double-paned></v-calendar>
        </el-card>
      </div>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>Birthday and Events</span>
            </div>
            <el-table :data="tableData" style="width: 100%" id="birthdaytable">
              <el-table-column prop="date" label="Date" width="180"></el-table-column>
              <el-table-column prop="name" label="Name" width="180"></el-table-column>
              <el-table-column prop="department" label="Department" width="180"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="12"></el-col>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Graph</span>
          </div>
          <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </el-card>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";
import Chat from "vue-beautiful-chat";
import VueResource from "vue-resource";
import InfiniteSlideBar from "vue-infinite-slide-bar";
import { GChart } from "vue-google-charts";
import axios from "axios";
import PortalVue from "portal-vue";

export default {
  name: "dashboard",
  computed: {
    ...mapGetters(["name", "roles"])
  },
  components: {
    InfiniteSlideBar
  },
  data() {
    return {
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
      gridData: [
        {
          id: "",
          name: "",
          username: "",
          email: ""
        }
      ],
      grid: [
        {
          name: "Prashish",
          email: "Shrestha"
        },
        {
          name: "Prashish",
          email: "Shrestha"
        }
      ],
      attrs: [
        {
          key: "today",

          key: "today",
          dates: new Date(2019, 0, 1),
          highlight: {
            backgroundColor: "#ff8080"
          },
          // Just use a normal style
          contentStyle: {
            color: "#fafafa"
          },
          // Our new popover here
          popover: {
            label: "You just hovered over today's date!"
          }
        }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "Ram",
          department: "IT Department"
        },
        {
          date: "2016-05-02",
          name: "Shyam",
          department: "HR Department"
        },
        {
          date: "2016-05-04",
          name: "Hari",
          department: "Network Department"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          department: "Network Department"
        }
      ]
    };
  },
  created: function() {
    this.po();
  },
  methods: {
    po: function() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          this.gridData = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      // for(i=0;i<response.data.length;i++){
      //  var d = response.data[i];
      //   name = d.name;
      //   console.log(name);
      // };
      // }).catch(function(error){
      //   alert(error);
      // })
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  margin-top: 20px;
}
</style>
