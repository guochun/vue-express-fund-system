<template>
  <div class="fill-contain">
    <el-table
      :data="tableData"
      style="width: 100%"
      v-if="tableData.length > 0"
      max-height="450"
      border
    >
      <el-table-column prop="date" label="创建时间" header-align="center" align="left" width="230">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type" label="收支类型" align="center" width="130">
        <template slot-scope="scope">
          <span style="color:  #567677;">{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="describe" label="收支描述" align="center" width="130">
        <template slot-scope="scope">
          <span style="color: #567677;">{{ scope.row.describe}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="income" label="收入" align="center" width="130">
        <template slot-scope="scope">
          <span style="color: #ff5566;">{{ scope.row.income }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="expend" label="支出" align="center" width="130">
        <template slot-scope="scope">
          <span style="color: #00d053;">{{ scope.row.expend }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="cash" label="账户现金" align="center" width="130">
        <template slot-scope="scope">
          <span style="color: #4db3ff;">{{ scope.row.cash }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" align="center" width="180">
        <template slot-scope="scope">
          <span style="color: #00d053;">{{ scope.row.remark }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="small" icon="edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            icon="delete"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Fundlist",
  data() {
    return {
      tableData: [],
      allTableData: [],
      filterTableData: [],
      dialog: {
        show: false,
        title: "",
        option: "edit"
      },
      form: {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      },
      //需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        page_sizes: [5, 10, 15, 20], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      },
      search_data: {
        startTime: "",
        endTime: ""
      }
    };
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      // 获取表格数据
      this.$http.getProfile().then(res => {
        this.tableData = res.data.map((item, key) => {
          item.date = this.formatDate(item.date);
          return item;
        });
        //this.allTableData = res.data;
        //this.filterTableData = res.data;
      });
    },
    formatDate(str) {
      const date = new Date(str);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    },
    handleEdit(index, row) {

    },
    handleDelete(index, row) {

    }
  }
};
</script>
<style scoped>
.fill-contain {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
