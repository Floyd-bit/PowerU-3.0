/* eslint-disable */
<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="账单" name="activity">
                <activity />
              </el-tab-pane>
              <el-tab-pane label="绑定设备" name="Timeline">
                <timeline/>
              </el-tab-pane>
              <el-tab-pane label="修改信息" name="account">
                <account :user="user" />
              </el-tab-pane>

            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'

export default {
  name: 'Profile',
  components: { UserCard, Activity, Timeline, Account},
  data() {
    return {
      user: {
        name: "",
        email: "",
        avatar: "",
        phonenumber: "",
        IDNumber: "",
        address: "",
        adminlevel: "",
        credibility: "",
        income: "",
        sex: "",
        birthday: "",
      },
      activeTab: 'activity',
      listLoading:false,
    }
  },
  computed: {
    ...mapGetters([
      "name ",
      "email ",
      "avatar ",
      "phonenumber ",
      "IDNumber",
      "address",
      "adminlevel",
      "credibility",
      "income",
      "sex",
      "birthday",
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      console.log("trying get users!");
      axios
        .get(" ", {
          params: {
          },
        })
        .then((responese) => {

        });

    }}

}
</script>
