import { Button, Form, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function AppSettingForm() {
  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG or SVG File!');
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      message.error('image must be less than 5MB');
    }
    return false;
  };
  return (
    <>
      <Form.Item
        name="file"
        label="logo file"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload
          beforeUpload={beforeUpload}
          listType="picture"
          accept="image/png, image/jpeg, image/svg+xml"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
    </>
  );
}
