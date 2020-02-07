// ES5
class JiraBacklogCsvExporter{

static getIssuesForBacklog(requestObject, callback) {
  var JiraClient = require("jira-connector");
  var jira = new JiraClient(requestObject);
  var csvResponse = "";

  // ES5
  jira.board.getIssuesForBacklog({
      boardId: requestObject.boardId
    },
    function(error, response) {
      var responseArray = response.issues;
      for (var idx in responseArray) {
        var item = responseArray[idx];
        var summary = item.fields.summary;
        if (idx == 0) {
          csvResponse+="Key, Description"+"\r\n";
          csvResponse+=item.key + ',' + '\" ' + summary+"\"\r\n";
        } else {
          csvResponse+=item.key + ',' + ' \"' + summary+"\"\r\n";
        }
      }
      callback(error, csvResponse);
    }
  );
}
}

module.exports.getIssuesForBacklog = JiraBacklogCsvExporter.getIssuesForBacklog;
