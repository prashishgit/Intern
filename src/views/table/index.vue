<template>
  <div class="app-container">
    <template>
      <el-row>
        <el-button round @click="handlePost()" style="margin:20px;float:right">ADD POST</el-button>
      </el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="S.No" width="100"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="description" label="Description" width="180"></el-table-column>
        <el-table-column prop="category" label="Category"></el-table-column>
        <el-table-column prop="wtype" label="Work Type"></el-table-column>
        <el-table-column prop="ed" label="Edit/Delete">
          <!-- <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template> -->
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import ElementUI from "element-ui";
export default {
  data() {
    return {
      departmentData: [],
      tableData: [
        {
          id: "",
          name: "",
          description: ""
        }
      ]
    };
  },
  created: function(){
     this.po();
  },
  methods: {
    po: function() {
      axios
        .get('https://localhost:5001/api/department', {
          headers: { 
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE', 
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type', 
            'Content-Type': 'application/json', 
            'Accept': 'application/json' 
          }
        })
        .then(response => {
          this.tableData = response.data.departments;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleEdit(index, row) {
      this.$router.push({ path: "edit", params: { row: row } });
    },
    handleDelete(index, row) {
      this.$confirm(
        "This will permanently delete the User. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      )
        .then(() => {
          this.loading = true;
          //NProgress.start();
          var userParams = {
            Id: row.id,
            Name: row.name,
            UserName: row.username,
            Password: row.password,
            RoleId: row.roleId
          };

          deletePost(userParams)
            .then(res => {
              this.loading = false;
              //NProgress.done();
              this.getUsers();
              this.$message({
                type: "success",
                message: "Delete completed"
              });
            })
            .catch(error => {
              this.$message({
                type: "info",
                message: "Delete canceled " + error
              });
            });
        })
        .catch(error => {
          this.$message({
            type: "info",
            message: "Delete canceled " + error
          });
        });
    },
    handlePost() {
      this.$router.push({ path: "index", name: "Form" });
    }
  }
};
</script>
