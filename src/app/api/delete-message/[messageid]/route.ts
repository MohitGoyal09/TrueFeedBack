import UserModel from "@/model/user";
import { getServerSession } from "next-auth/next";
import dbConnect from "@/lib/dbConnect";
import { User } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function DELETE(
  request: Request,
  { params }: { params: { messageid: string } }
) {
  const messageid = params.messageid;
  await dbConnect();
  const session = await getServerSession(authOptions);
  const _user: User = session?.user as User;
  if (!session || !_user) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const updateResult = await UserModel.updateOne(
      { _id: _user._id },
      { $pull: { messages: { _id: messageid } } }
    );
    if (updateResult.modifiedCount == 0) {
      return Response.json(
        {
          success: false,
          message: "Message not found or already deleted",
        },
        { status: 404 }
      );
    } else {
      return Response.json(
        {
          success: true,
          message: "Message deleted successfully",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error deleting message:", error);
    return new Response("Error deleting message", { status: 500 });
  }
}
