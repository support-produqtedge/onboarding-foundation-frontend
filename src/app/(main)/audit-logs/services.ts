interface AuditLogs {
  id: string;
  name: string;
  action: string;
  description: string;
  createdAt: string;
}

const apiUrl = "http://ec2-13-62-76-73.eu-north-1.compute.amazonaws.com:3008/api/v1";

export const getLogs = async (token: string): Promise<AuditLogs[]> => {
  const response = await fetch(`${apiUrl}/logs`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  return await response.json();
}
