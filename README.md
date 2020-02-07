# Jira Backlog CSV Exporter

**Author**:  [Kiran Kashyap](mailto:kiran.kashyap.ds@gmail.com)

## How to use?

```
var JiraBacklogCsvExporter = require('jira-backlog-csv');

var callback = function(err,csv){
  if(err){
    console.error(err);
  }
  console.log(csv);
}

JiraBacklogCsvExporter.getIssuesForBacklog({
  host: "myhost.atlassian.net",
  basic_auth: {
    email: "example@email.com",
    api_token: "my_token_34234sdafagdz"
  },
  boardId:2 //enter your board id here
},callback);

```
