import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const EmailViewer = () => {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "name", headerName: "Name", width: 180 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "subject", headerName: "Subject", width: 200 },
    {
      field: "message",
      headerName: "Message",
      width: 400,
      renderCell: (params) => (
        <div className="truncate" title={params.value}>
          {params.value}
        </div>
      ),
    },
  ];

  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isReplying, setIsReplying] = useState(false);
  const [replySubject, setReplySubject] = useState("");
  const [replyText, setReplyText] = useState("");

  const handleRowClick = (params) => {
    setSelectedEmail(params.row);
    setIsReplying(false);
  };

  const handleReplyClick = () => {
    setIsReplying(true);
    setReplyText("");
  };

  const handleDeleteClick = async () => {
    const id = selectedEmail.id;
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/admin/delete_message",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
          mode: "cors",
          credentials: "include",
        }
      );

      const response2 = await fetch(
        "http://localhost:3000/api/v1/admin/get_messages",
        {
          credentials: "include",
        }
      );

      const newRow = await response2.json();

      setRows(newRow);
    } catch (error) {}

    setRows(rows.filter((row) => row.id !== selectedEmail.id));

    setSelectedEmail(null);
    setIsReplying(false);
  };

  const handleSendReply = async () => {
    const to = selectedEmail.email;
    const subject = replySubject;
    const message = replyText;
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/admin/send_email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ to, subject, message }),
          mode: "cors",
          credentials: "include",
        }
      );
    } catch (error) {}
    alert(`Reply sent to ${selectedEmail.email}`);
    setIsReplying(false);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/admin/get_messages",
          {
            credentials: "include",
          }
        );

        const data = await response.json();
        setRows(data);
      } catch (error) {}
    };

    fetchMessages();
  }, []);

  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Inbox</h1>
        <p className="text-gray-600">Manage your received emails</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 bg-white rounded-lg shadow overflow-hidden">
          <div className="h-96 w-full">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              onRowClick={handleRowClick}
              className="border-none"
              sx={{
                "& .MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "#f9fafb",
                  cursor: "pointer",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#f3f4f6",
                },
              }}
            />
          </div>
        </div>

        {selectedEmail && !isReplying && (
          <div className="lg:col-span-3 bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {selectedEmail.subject}
                </h2>
                <p className="text-gray-600 mt-1">
                  From: {selectedEmail.name} ({selectedEmail.email})
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  onClick={handleReplyClick}
                >
                  Reply
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-800 whitespace-pre-line">
                {selectedEmail.message}
              </p>
            </div>
          </div>
        )}

        {selectedEmail && isReplying && (
          <div className="lg:col-span-3 bg-white rounded-lg shadow p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Reply to: {selectedEmail.subject}
              </h2>
              <p className="text-gray-600 mt-1">
                To: {selectedEmail.name} ({selectedEmail.email})
              </p>
            </div>
            <div className="mb-4 flex flex-col gap-5">
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Subject"
                value={replySubject}
                onChange={(e) => setReplySubject(e.target.value)}
              />
              <textarea
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-64"
                placeholder="Type your reply here..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                onClick={() => setIsReplying(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={handleSendReply}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailViewer;
